import { useEffect } from 'react' 

const useClickOutdside = (
    ref: React.MutableRefObject<HTMLElement>,
    handler: (event: MouseEvent | TouchEvent )=> void 
    )=>{
      useEffect(()=>{
        const listener = (event:  MouseEvent | TouchEvent )=>{
          if(!ref.current || ref.current.contains(event.target as Node)){
            return
          }
            handler(event)
        };
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

          return () =>{
            document.addEventListener('mousedown', listener)
            document.addEventListener('touchstart', listener )
          }
      }, [handler, ref])
    }


export {useClickOutdside}
