
const Songs = ({image, name, desc, id}) => {
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer">
        <img src={image} className="rounded" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}

export default Songs