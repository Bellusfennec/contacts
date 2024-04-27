import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { useGetContactsQuery } from "src/redux/contact";
import { useAppSelector } from "src/redux/store";

export const FavoriteListPage = memo(() => {
  const { data: contacts } = useGetContactsQuery();
  const favoriteContacts = useAppSelector((state) => state.favoriteContact);
  const list = contacts?.filter(({ id }) => favoriteContacts.includes(id));

  return (
    <Row xxl={4} className="g-4">
      {list?.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
