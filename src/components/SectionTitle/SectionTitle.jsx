

const SectionTitle = ({ heading, subHeading }) => {
    
    return (
        <div className="w-full mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl my-3 text-center font-bold">
                {heading}
            </h1>
            <p className="text-gray-400 text-center">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;