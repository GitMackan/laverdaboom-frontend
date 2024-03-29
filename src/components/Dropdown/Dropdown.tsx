import { useEffect, useRef, useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { DogType } from "../../pages/dogs/Dog";
import "./Dropdown.scss";

export type Option = {
	_key?: string;
	info?: string;
	value?: string;
	label: string;
	_type?: string;
	id?: string;
};

export function useOutsideAlerter(ref: any, setState: any) {
	useEffect(() => {
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				setState(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

const DropdownMenu = ({ options }: DropdownMenuProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const params = useParams();

	const dropDownRef = useRef(null);
	useOutsideAlerter(dropDownRef, setIsOpen);

	const toggleList = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		setIsOpen(false);
	}, [params]);

	return (
		<div ref={dropDownRef} className={"dropDown-container"}>
			<div onClick={toggleList} className={"second"}>
				<div className={"third"}>
					<p>{params.name || "Välj hund"}</p>
					{isOpen ? <FiArrowUp /> : <FiArrowDown />}
				</div>
			</div>
			{isOpen && (
				<ul
					role="list"
					className={"fourth"}
					style={{
						zIndex: isOpen ? 10 : 0,
						display: isOpen ? "block" : "none",
					}}
				>
					<li style={{ background: "red" }}>
						<p className="dropdown-heading">Tikar</p>
					</li>
					{options
						?.filter((e) => e.gender?.toLowerCase() === "tik" && !e.angelDog)
						.map((dog) => (
							<li id={dog.name} className={"fifth"} key={dog._id}>
								<div>
									<Link to={`/dogs/${dog.nickName}`}>
										<p className="dropdown-listItem">{dog?.name}</p>
									</Link>
								</div>
							</li>
						))}
					<li>
						<p className="dropdown-heading">Hanar</p>
					</li>
					{options
						?.filter((e) => e.gender?.toLowerCase() === "hane" && !e.angelDog)
						.map((dog) => (
							<li id={dog.name} className={"fifth"}>
								<div>
									<Link to={`/dogs/${dog.nickName}`}>
										<p className="dropdown-listItem">{dog?.name}</p>
									</Link>
								</div>
							</li>
						))}
					<li>
						<p className="dropdown-heading">Änglahundar</p>
					</li>
					{options
						?.filter((e) => e.angelDog)
						.map((dog) => (
							<li id={dog.name} className={"fifth"}>
								<div>
									<Link to={`/dogs/${dog.nickName}`}>
										<p className="dropdown-listItem">{dog?.name}</p>
									</Link>
								</div>
							</li>
						))}
				</ul>
			)}
		</div>
	);
};

export default DropdownMenu;

interface DropdownMenuProps {
	options?: DogType[];
	title?: string;
	label?: string;
	onChange?: any;
	name?: string;
}
