export default function Responsividade(props) {
    return(
        <div className="flex flex-col items-center justify-center w-[90%] max-w-[1200px] mx-auto">
            {props.children}
        </div>
    );
}