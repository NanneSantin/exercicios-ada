const ColorSwitch = ({ onChangeColor }) => {

    function handleClick(e) {
        e.stopPropagation();
        onChangeColor()
    }

    return (
        <button onClick={(e) => handleClick(e)}>Alterar Cor</button>
    );
};

export default ColorSwitch;