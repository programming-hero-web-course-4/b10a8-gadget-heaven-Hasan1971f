const Heading = ({ title, para }) => {
    return (
        <div className="flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-base md:text-lg text-gray-600">{para}</p>
        </div>
    );
};

export default Heading;
