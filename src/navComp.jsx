/* eslint-disable react/prop-types */
export default function Components(props){
const titles=props.title.map((t)=> {
    return  (
        <div key={t.id} className="note-name" >
            <button className="rename" onClick={()=> {
                props.DisplayOn(true);
                return props.currid(t.id)
            }}>*</button>
            <p  className="textbox"  onClick={()=> props.currid(t.id)}>{t.title}</p>
            {t.id ==0 ? <div style={{width:"25px"}} ></div>: <p className="delete-note" onClick={()=> props.delnote(t.id)} >DEL</p>}
        </div>
    )

})
    return (
        <>
        {titles}
        </>
    )
}