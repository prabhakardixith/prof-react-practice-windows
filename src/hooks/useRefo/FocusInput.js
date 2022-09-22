import React,{useEffect,useRef} from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
    useEffect(() => {
     inputRef.current.focus();
      return () => {
        
      }
    }, [])
    
  return (
    <div>
        <input ref={inputRef} type='text' placeholder='practice useRef hooks' />
    </div>
  )
}

export default FocusInput