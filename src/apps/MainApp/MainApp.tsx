import { useEffect } from "react";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/__data__";
import { Layout } from "src/components/Layout";
import { ContactListPage, ContactPage, FavoriteListPage, GroupListPage, GroupPage } from "src/pages";
import {
  setContactActionCreator,
  setFavoriteContactActionCreator,
  setGroupContactActionCreator,
} from "src/redux/actions";
import { useAppDispatch } from "src/redux/store";
import "./MainApp.scss";

export const MainApp = () => {
  const dispatch = useAppDispatch();
  const DATA_FAVORITE_CONTACT = [DATA_CONTACT[0].id, DATA_CONTACT[1].id, DATA_CONTACT[2].id, DATA_CONTACT[3].id];

  useEffect(() => {
    dispatch(setGroupContactActionCreator(DATA_GROUP_CONTACT));
    dispatch(setContactActionCreator(DATA_CONTACT));
    dispatch(setFavoriteContactActionCreator(DATA_FAVORITE_CONTACT));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
