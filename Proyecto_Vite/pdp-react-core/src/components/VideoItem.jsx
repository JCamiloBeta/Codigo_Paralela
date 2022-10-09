const VideoItem = props => {
	return (
		<div>
			<h2>{props.title}</h2>
			<div>
				<span>{props.duration}</span>
				<span>{props.date}</span>
			</div>
			<p>{props.description}</p>
		</div>
	);
};

export default VideoItem;
