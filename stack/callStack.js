const func1 = () => {
    func2()
    console.log('我是func1')

}
const func2 = () => {
    func3()
    console.log('我是func2')

}
const func3 = () => {
    console.log('我是func3')
}
func1()
