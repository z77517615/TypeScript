// * 將Function加上型別:

// * 原題目
// let anAwesomeFunction = function (nums) {
//   let obj = {};
//   for (var i = 0; i < nums.length; i++) {
//       obj[nums[i]] = obj[nums[i]] + 1 || 1;
//       if (obj[nums[i]] > nums.length / 2) {
//           return nums[i];
//       }
//   }
// };

// * ex1
let anAwesomeFunction = function(nums: Array<number>): number | undefined { 
  let obj: { [key: number]: number } = {}
    for (var i = 0; i < nums.length; i++) {
      obj[nums[i]] = obj[nums[i]] + 1 || 1
      if (obj[nums[i]] > nums.length / 2) {
        return nums[i]
      }
    }
}

anAwesomeFunction([1])
anAwesomeFunction([1,1,1,2,3,4,1,1,1])
anAwesomeFunction([1,1,1,2,3,4,1,1,"hi"])


// * ex2.
type T = Array<number>
let AwesomeFunctionTwo: (x: T) => number | undefined = function(nums){
  let obj: { [key: number]: number } = {}
    for (var i = 0; i < nums.length; i++) {
      obj[nums[i]] = obj[nums[i]] + 1 || 1
      if (obj[nums[i]] > nums.length / 2) {
        return nums[i]
      }
    }
  }
  AwesomeFunctionTwo([])
  AwesomeFunctionTwo([1])
  AwesomeFunctionTwo([1,1,1,2,3,4,1,1,1])
  AwesomeFunctionTwo('hi')


// * ex3.
interface TypeOfAwesomeFunction {
    (a: Array<number>): number | undefined
  }
let AwesomeFunctionThree: TypeOfAwesomeFunction = function(nums){
  let obj: { [key: number]: number } = {}
    for (var i = 0; i < nums.length; i++) {
      obj[nums[i]] = obj[nums[i]] + 1 || 1
      if (obj[nums[i]] > nums.length / 2) {
        return nums[i]
      }
    }
  }
  AwesomeFunctionThree([])
  AwesomeFunctionThree([1])
  AwesomeFunctionThree([1,1,1,2,3,4,1,1,1])
  AwesomeFunctionThree('hi')




// * 資料用interface寫型別:
type ArrayItem = { 
  orderID: number,
  itemName: string,
  itemCount: number
}

interface OrderItem {
  orderID: number,
  itemName: string,
  itemCount: number
}

interface Customer {
  name: string
  phone: string
  orders: Array<ArrayItem>
}

// *   補上原題目 套用型別
let objOne: Customer = {
  name: 'zoe',
  phone: '0912345678',
  orders: [
    {
    orderID: 11111, 
    itemName: 'apple', 
    itemCount: 5
    }, 
    {
    orderID: 22222, 
    itemName: 'orange', 
    itemCount: 10
    }
  ]
}

// * Error 測試
let CustomerOrderTwo: Customer = {
  name: 111,
  phone: 0912345678,
  orders: [
    {
    orderID: 11111, 
    itemName: 'apple', 
    itemCount: 5
    }, 
    {
    orderID: 22222, 
    itemName: 'orange', 
    itemCount: 10
    },
    {
    orderID: 'ssss', 
    itemName: 'orange', 
    itemCount: 10
    }
  ]
}

// * Error 測試
let CustomerOrderThree: Customer = {
  name: '111',
  phone: '0912345678',
  orders: [
    {
    orderID: 11111, 
    itemName: 'apple', 
    itemCount: 5,
    phone: 0999999999
    }
  ]
}


// * Record - 構成一個由Keys組成的interface 

interface Colors {
    color: string
}
type TextKey = 'title' | 'subtitle'
  
// * Record 寫法
type TextColors = Record<TextKey, Colors>


// * 等同於
type TextColor = { [k in TextKey]: Colors }

// // * 原函式
// function caseVersionOptions() {
//   const options = [
//     {
//       title: this.t('component.magsafe_type_menu.standard'),
//       value: 'standard'
//     }
//   ]

//   if (this.magSafeProduct) {
//     options.push({
//       title: this.t('component.magsafe_type_menu.magsafe'),
//       value: 'magsafe'
//     })
//   } else if (this.unreleasedProductsHandles.includes(this.device)) {
//     options.push({
//       title: this.t('component.magsafe_type_menu.magsafe'),
//       value: '',
//       disabled: true
//     })
//   }
//   return options
// }

// * 加上options型別
function caseVersionOptions() {
  const options : Array<{
    title: string
    value: string
    disabled?: boolean
  }> = [
    {
      title: this.t('component.magsafe_type_menu.standard'),
      value: 'standard'
    }
  ]

  if (this.magSafeProduct) {
    options.push({
      title: this.t('component.magsafe_type_menu.magsafe'),
      value: 'magsafe'
    })
  } else if (this.unreleasedProductsHandles.includes(this.device)) {
    options.push({
      title: this.t('component.magsafe_type_menu.magsafe'),
      value: '',
      disabled: true
    })
  }
  return options
}


// *ex2  function 補上型別
type superType = {
  available: boolean
  clearHandle: string
  compareAtPrice: string | null
}

interface variantType {
  available: boolean 
  compareAtPrice: string | null
  cursor: string
  discountPrice: number
  featuredImage: {
    src: string
    id: string
  }
  id: number
  options: Array<string>
  optionsWithKey: {
    Color: string
    variantType: string
  }
  price: number

resolved: {
  color: string
  colorTrans: string 
  color_trans: string 
} 
  sku: string 
  title: string
  super: superType
}

function getOptionText(variant: variantType): string {
  const splitSignRegex = /\{.*\}|\(.*\)|<.*>/g
  const optionsKey = Object.keys(variant.optionsWithKey).map(options => options.toLowerCase())

  let subtitle: Array<string> = []
const hasColorOption = optionsKey.includes('color') || (variant.resolved.color && !variant.resolved.color_trans.includes('colors.'))

  if (hasColorOption) {
    const colorTrans = filterBrackets(variant.resolved.color_trans, splitSignRegex, true)
    let variantTitle = variant.title.replace(splitSignRegex, '')
    const splitOptions = [' / ', ' [']
    let titleArr: Array<string> =[]
    let splitOption = ''
    splitOptions.forEach(option => {
      if (variantTitle.includes(option)) {
        titleArr = variantTitle.split(option)
        splitOption = option
      }
    })

    if (titleArr.length > 0) {
      // 黑 / 正面；1.2m [3.9 ft long]
      variantTitle = `${colorTrans}${splitOption}${titleArr[1]}`
    } else {
      variantTitle = colorTrans
    }

    // Addon - Apple Watch CrashGuard NX rim
    variantTitle = variantTitle.replace(/\/ \bno\b *|\/ \byes\b */g, '')

    subtitle.push(variantTitle)
  } else if (optionsKey.includes('varianttype')) {
    const variantType = filterBrackets(variant.optionsWithKey.variantType, splitSignRegex, true)
    subtitle.push(variantType)
  } else {
    subtitle.push(filterBrackets(variant.title, splitSignRegex, true))
  }

  return `${subtitle.join(' / ')}`
}



function filterBrackets(str: string, pattern: string, isBrackets: boolean): string {
  let highlightReg

  switch (pattern) {
    case '(':
      highlightReg = /\(.*\)/g
      break
    case '[':
      highlightReg = /\[.*\]/g
      break
    default:
      highlightReg = /\(.*\)/g
      break
  }

  let highlightStr = highlightReg.exec(str)

  if (highlightStr) {
    if (isBrackets) {
      str = highlightStr[0]
    } else {
      str = str.replace(highlightStr[0], '')
    }
  } else if (isBrackets) {
    str = ''
  }

  return str
}



interface Foo {
    n?: number;
    s: string;
}


const foo4 = { n: '' as any } as Foo; 
foo4.n = undefined
