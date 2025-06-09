const OptimizedImage = ({ src, alt, className = "", clickHandler }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`${className}`}
            loading="lazy"
            decoding="async"
            onClick={clickHandler}
        />
    );
};

export default OptimizedImage;
