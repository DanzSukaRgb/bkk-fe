import useReveal from "../hooks/useReveal";
import "../styles/animations.css";

export default function Reveal({
    children,
    className = "",
    as: Tag = "div",
    delay = 0,
    style,
    ...rest
}) {
    const { ref, visible } = useReveal();
    const mergedStyle = delay
        ? { ...style, transitionDelay: `${delay}ms` }
        : style;

    return (
        <Tag
            ref={ref}
            className={`reveal ${visible ? "is-visible" : ""} ${className}`}
            style={mergedStyle}
            {...rest}
        >
            {children}
        </Tag>
    );
}
