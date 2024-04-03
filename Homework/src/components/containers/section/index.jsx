import "./style.scss"

const index = ({children, id}) => {

    if(!id){
        return <section>{children}</section>
    }

  return <section id={id}>{children}</section>;
}

export default index 