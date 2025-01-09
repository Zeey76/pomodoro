const FontSettings = ({ handleSettingsChange, tempSettings }) => {
  const fonts = ["font-kumbhSans", "font-robotoSlab", "font-spaceMono"];
  return (
    <>
      {fonts.map((font) => (
        <FontSelector
          key={font}
          handleSettingsChange={handleSettingsChange}
          fontChoice={font}
          backgroundColor={
            font === tempSettings.font ? "bg-stone-900" : "bg-neutral-200"
          }
          textColor={font === tempSettings.font ? "text-white" : "text-black"}
        />
      ))}
    </>
  );
};

function FontSelector({
  fontChoice,
  handleSettingsChange,
  backgroundColor,
  textColor,
}) {
  return (
    <button>
      <div
        key={fontChoice}
        className={`h-2.5 w-2.5 ${backgroundColor} ${textColor} rounded-full flex items-center justify-center`}
        style={{ fontFamily: fontChoice }}
        onClick={() => handleSettingsChange(fontChoice, "font")}
      >
        Aa
      </div>
    </button>
  );
}

export default FontSettings;
