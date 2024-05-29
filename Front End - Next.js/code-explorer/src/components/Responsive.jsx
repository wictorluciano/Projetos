export default function Responsive(props) {
    return (
        <div className="flex flex-col items-center justify-center w-[90%] md:w-[704px] xl:w-[1216px] mx-auto">
            {props.children}
        </div>
    )
}