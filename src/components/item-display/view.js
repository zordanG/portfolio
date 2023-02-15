import './style.sass';

function ItemDisplay(props) {
    return(
        props.tech.map((tech) => {
            return(
                <div className="item-display round-border" key={tech}>
                    <p className="item">{tech}</p>
                </div>
            )
        })
    )
}

export {ItemDisplay};