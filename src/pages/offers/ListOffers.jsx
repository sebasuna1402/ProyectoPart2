import { useQuery } from "react-query";
import { getOffers } from "../../services/OfferService";

const ListOffers = () => {
  const { data, isLoading, isError } = useQuery("offers", getOffers, {
    staleTime: 5000,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div className="list-offers">
      {data.data.map((company) => (
        <div className="div-offer" key={company.id}>
          <span className="offer-title">{company.name}</span>
          <span>{company.description}</span>
        </div>
      ))}
    </div>
  );
};

export default ListOffers;
