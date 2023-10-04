const Hero = () => {
    return (
        <div className="min-h-screen bg-white justify-center items-center  grid">
            <div className="grid grid-cols-12">
                {/* <img className="col-start-3 col-end-11" src="src\images\Frame 1.png" alt="" /> */}
                <div className="max-w-md col-start-3 col-end-11 text-center mt-4">
                    <h1 className="mb-5 text-5xl font-bold text-green-900">100 % <br />Organic</h1>
                    <p className="mb-5 text-green-900 font-medium">Welcome to a world where food meets perfection."Crafting Healthy, Delicious, and Hygienic Delights from Nature's Bounty" Taste the Difference!</p>
                    <button className="btn bg-jade text-white border-jade">Explore</button>
                </div>
            </div>
        </div>
    );
}
//daisy
export default Hero;