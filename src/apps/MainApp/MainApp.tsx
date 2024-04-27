import { useEffect } from "react";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "src/components/Layout";
import { ContactListPage, ContactPage, FavoriteListPage, GroupListPage, GroupPage } from "src/pages";
import { useGetContactsQuery } from "src/redux/contact";
import { setFavoriteContact } from "src/redux/favoriteContact";
import { useAppDispatch } from "src/redux/store";
import "./MainApp.scss";

export const MainApp = () => {
  const dispatch = useAppDispatch();
  const { data: contacts } = useGetContactsQuery();

  useEffect(() => {
    if (contacts && contacts?.length > 4) {
      const DATA_CONTACT = contacts;
      const DATA_FAVORITE_CONTACT = [DATA_CONTACT[0].id, DATA_CONTACT[1].id, DATA_CONTACT[2].id, DATA_CONTACT[3].id];
      dispatch(setFavoriteContact(DATA_FAVORITE_CONTACT));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts]);

  return (
    <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ContactListPage />} />
            <Route path="contact">
              <Route index element={<ContactListPage />} />
              <Route path=":contactId" element={<ContactPage />} />
            </Route>
            <Route path="groups">
              <Route index element={<GroupListPage />} />
              <Route path=":groupId" element={<GroupPage />} />
            </Route>
            <Route path="favorit" element={<FavoriteListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
