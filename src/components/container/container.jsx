import styels from './container.module.css'

export default function Container({children}) {
    return (
        <div className={styels.container}>
            {children}
        </div>
    )
}