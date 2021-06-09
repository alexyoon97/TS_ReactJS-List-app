import React,{useState} from 'react'
import { IState as Props} from "../App"

interface IProps{
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) =>{

    const [ input, setInput] = useState({
        name:'',
        age:'',
        note:'',
        url:''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleClick = (): void => {
        if(!input.name || !input.age||!input.url){
            return
        }
        setPeople([
            ...people,
            {
                name:input.name,
                age:parseInt(input.age),
                url:input.url,
                note:input.note
                
            }
        ])
    }

    return(
        <div className='AddToList'>
            <input
                type='text'
                placeholder='Name'
                className='AddToList-input'
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type='text'
                placeholder='Age'
                className='AddToList-input'
                value={input.age}
                name="age"
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder='Image URL'
                className='AddToList-input'
                value={input.url}
                name="url"
                onChange={handleChange}
            />
            <textarea
                placeholder='Note'
                className='AddToList-input'
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button className='AddToList-btn' onClick={handleClick}>
                Add to List
            </button>
        </div>
    )
}

export default AddToList