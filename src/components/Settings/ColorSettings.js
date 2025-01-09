import { CheckIcon } from "@heroicons/react/16/solid";

const ColorSettings = ({ handleSettingsChange, tempSettings }) => {
  const colors = [
    "hsl(0, 91%, 71%)",
    "hsl(182, 91%, 71%)",
    "hsl(284, 89%, 74%)",
  ];
  return (
    <>
      {colors.map((color) => (
        <ColorSelector
          key={color}
          handleSettingsChange={handleSettingsChange}
          colorChoice={color}
          children={
            color === tempSettings.color ? (
              <CheckIcon className="h-1 w-1 text-stone-900" />
            ) : (
              ""
            )
          }
        />
      ))}
    </>
  );
};

function ColorSelector({ handleSettingsChange, colorChoice, children }) {
  return (
    <div
      key={colorChoice}
      className={`h-2.5 w-2.5 rounded-full flex items-center justify-center cursor-pointer`}
      style={{ backgroundColor: colorChoice }}
      onClick={() => handleSettingsChange(colorChoice, "color")}
    >
      {children}
    </div>
  );
}

export default ColorSettings;
