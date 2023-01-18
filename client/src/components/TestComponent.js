import { useContext } from "react"
import { AppContext } from '../Context'


const TestComponent = () => {
    const {message} = useContext(AppContext)
    console.log(message)

    const content = message.map(item => {
        console.log(item._id)
        console.log(item.name)
        console.log(item.price)
        console.log(item.imageURL)
        return (
            <img  key={item._id} src={item.imageURL} alt='test'></img>
        )
    })



    return (
        <>
            {content}
        </>
    );
}
 
export default TestComponent;