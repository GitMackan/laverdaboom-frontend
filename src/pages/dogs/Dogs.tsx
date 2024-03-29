import { useEffect, useState } from "react";
import "./Dogs.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { DogType } from "./Dog";
import axios from "axios";
import { useWindowSize } from "../../utility/useWindowSize";
import MobileSidebar from "../../components/MobileSidebar/MobileSidebar";
import { assetUrl } from "../../assets/constants";
import Reveal from "../../components/Animation.tsx/Reveal";
import { Link } from "react-router-dom";

const Dogs = () => {
	const [dogs, setDogs] = useState<DogType[] | undefined>();
	const windowWidth = useWindowSize().width;
	const URL = process.env.REACT_APP_SERVER_URL;

	useEffect(() => {
		getDogs();
	}, []);

	const getDogs = async () => {
		if (URL) {
			await axios.get(`${URL}/dogs`).then((response) => {
				setDogs(response.data);
			});
		}
	};

	const generateSelectedDogUrl = (name: string): string => {
		const characterMap = {
			å: "a",
			ä: "a",
			ö: "o",
		};

		const sanitizedName = name
			.toLowerCase()
			.replace(/[åäö]/g, (match) => (characterMap as any)[match] || match);

		const url = `${window.location.origin}/dogs/${encodeURIComponent(
			sanitizedName
		)}`;

		return url;
	};

	return (
		<div className="dogs-homepage">
			<div className="dogs-container">
				{windowWidth && windowWidth < 1150 ? (
					<MobileSidebar dogs={dogs} />
				) : (
					<Sidebar dogs={dogs} />
				)}

				<div className="all-dogs-wrapper">
					<div className="all-dogs-container">
						{dogs
							?.filter(
								(e) =>
									e.breed === "Normalstor Tax" &&
									e.gender === "Tik" &&
									e.angelDog !== "true"
							)
							.map((e) => (
								<Reveal key={e._id}>
									<div className="all-dogs-dog">
										<h3>{e.name}</h3>
										<Link to={generateSelectedDogUrl(e.nickName)}>
											<div className="all-dogs-image-container">
												<img src={`${assetUrl}${e.image[0]}`} />
											</div>
										</Link>
									</div>
								</Reveal>
							))}
						{dogs
							?.filter(
								(e) =>
									e.breed === "Normalstor Tax" &&
									e.gender === "Hane" &&
									e.angelDog !== "true"
							)
							.map((e) => (
								<Reveal key={e._id}>
									<div className="all-dogs-dog">
										<h3>{e.name}</h3>
										<Link to={generateSelectedDogUrl(e.nickName)}>
											<div className="all-dogs-image-container">
												<img src={`${assetUrl}${e.image[0]}`} />
											</div>
										</Link>
									</div>
								</Reveal>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dogs;
