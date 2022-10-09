const Button = ({ amount, setAmount }) => {
	return (
		<button
			onClick={() => {
				const newAmount = { ...amount };
				newAmount.value++;
				setAmount(newAmount);
			}}
		>
			Vistas : {amount.value}
		</button>
	);
};

export default Button;
