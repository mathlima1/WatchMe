interface GenreResponseProps {
    title: string;
}

export function Header(props: GenreResponseProps) {
    // Complete aqui
    return (
        <div className="container">
            <header>
                <span className="category">Categoria:<span> {props.title}</span></span>
            </header>
        </div>
    )
}