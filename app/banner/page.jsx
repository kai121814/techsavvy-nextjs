


export default function Banner() {

  const missionImage = '../img/mission.png';
  
    return (
      <div className="relative mx-auto w-full lg:h-full h-screen mb-0" id="home">
      <div className="bg-no-repeat bg-contain">
        <div className="relative flex-wrap z-0">
          <div className="flex w-full bg-black z-10">
            <div className="bg-[#03372A] w-1/3"></div>
            <img src={missionImage} alt="Mission" className="w-2/3 lg:h-full h-screen object-cover bg-[#03372A] "/>
          </div>
  
          <div className="absolute inset-y-0 left-1/3 lg:h-full w-2/3 bg-gradient-to-r from-[#03372A] to-transparent z-20"></div>
          <div className="absolute inset-y-0 lg:left-20 top-1/3 flex-wrap md:mx-20 mx-10 text-white text-center lg:w-1/3 w-2/3 z-30">
              <h1 className="text-white font-black text-left lg:text-7xl text-3xl lg:mb-14 mb-5">TECHSAVVY CODECAMP</h1>
              <p className="text-white font-semibold text-lg lg:text-2xl text-left">Enhancing your skills and knowledge in
                development, facilitating networking and
                knowledge-sharing among community members. Assisting job seekers in finding fulfilling roles in the IT
                Industry.</p>
            </div>
  
  
        </div>
      </div>
    </div>
  
    )
  }
  