import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { useAppSelector } from "src/store/redux";

export const FavoriteListPage = memo(() => {
  const contacts = useAppSelector((state) => state.contacts.entity);
  const favoriteContacts = useAppSelector((state) => state.favoriteContacts.entity);
  const list = contacts.filter(({ id }) => favoriteContacts.includes(id));

  return (
    <Row xxl={4} className="g-4">
      {list.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
