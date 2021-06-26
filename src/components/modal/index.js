
const Modal = ({children, ...props}) =>{

  return(
    <div
        className="popup"
        style={
          props.display === true && false === !props.display
            ? { opacity: 1, visibility: 'visible' }
            : { opacity: 0, visibility: 'hidden' }
        }
      >
        <div
          onClick={()=>props.onClose()}
          style={props.contentStyle}
        >
          <div
            className={props?.transparent ? props.className :  'popup_content '+ props.className}
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={
              props.display === true
                ? { opacity: 1, transform: 'scale(1)'}
                : { opacity: 0, transform: 'scale(.25)' }
            }
          >
            {children}
          </div>
        </div>
      </div>
  )
}
export default Modal
