import "./style.scss"

const index = ({children}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {children}
    </div>
  )
}


export default index