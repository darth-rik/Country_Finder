import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import CountryDetails from "../components/CountryDetails";
import { getCountryDetails } from "../features/countryCard/countryDetailsSlice";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useParams } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

const Details = () => {
	const dispatch = useDispatch();
	const params = useParams<{ name: string }>();

	useEffect(() => {
		dispatch(getCountryDetails(params.name));
	}, [params.name, dispatch]);

	const { country, loading, error } = useSelector(
		(state: RootStateOrAny) => state.countryDetails
	);

	return (
		<>
			<BackButton />
			{!country || loading ? (
				<Loader />
			) : error ? (
				<ErrorMessage error={error} />
			) : (
				country && <CountryDetails countryDetails={country} />
			)}
		</>
	);
};

export default Details;
