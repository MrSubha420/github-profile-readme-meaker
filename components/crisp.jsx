export function CrispBanner() {
  const bannerAnimation = {
    backgroundImage:
      "linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5)",
    backgroundSize: "600%",
    WebkitAnimation: "anime 16s linear infinite",
    animation: "anime 16s linear infinite",
  };

  const bannerWrapperAnimation = {
    animation: "appear 5s ease-in-out",
    overflow: "hidden",
    width: "100%",
  };

  const buttonStyles = {
    color: "white",
    transition: "all 0.2s ease-in-out",
    letterSpacing: "0.05em",
    fontWeight: 500,
    outline: "none",
    overflow: "hidden",
    display: "flex",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  return (
    <>
      <div style={bannerWrapperAnimation}>
        <div style={bannerAnimation}>
          <a
            style={buttonStyles}
            href="mailto:itsvgin@gmail.com"
            className="text-xs sm:text-base"
          >
            Want a crazy good website? Let&apos;s Discuss!
          </a>
        </div>
      </div>
      {/* <CrispWithNoSSR /> */}

      <style>{`
            @keyframes anime {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
    
            @keyframes appear {
              0% {
                height: 0px;
              }
              80% {
                height: 0px;
              }
              100% {
                height: 40px;
              }
            }
          `}</style>
    </>
  );
}
