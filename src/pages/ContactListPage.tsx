import { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { useGetContactsQuery } from "src/redux/contact";
import { useGetGroupContactsQuery } from "src/redux/groupContact";
import { ContactDto } from "src/types/dto/ContactDto";

export const ContactListPage = memo(() => {
  const { data: contactsState } = useGetContactsQuery();
  const { data: groupContactsState } = useGetGroupContactsQuery();
  const [contacts, setContacts] = useState<ContactDto[]>([]);

  useEffect(() => {
    if (contactsState) setContacts(contactsState);
  }, [contactsState]);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactsState || [];

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(({ name }) => name.toLowerCase().indexOf(fvName) > -1);
    }

    if (fv.groupId) {
      const groupContacts = groupContactsState?.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) => groupContacts.contactIds.includes(id));
      }
    }
    setContacts(findContacts);
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        {groupContactsState && (
          <FilterForm groupContactsList={groupContactsState} initialValues={{}} onSubmit={onSubmit} />
        )}
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
