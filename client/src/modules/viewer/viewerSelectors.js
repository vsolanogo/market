import { createSelector } from 'reselect';

const getViewerId = (state) => state.viewer.user;
const getUserEntities = (state) => state.entities.users;

export const getViewer = createSelector(
  [getViewerId, getUserEntities],
  (viewerId, users) => users[viewerId],
);

export const getViewerInitials = createSelector(
  [getViewer],
  (viewer) => {
    return viewer.fullName
      .split(' ')
      .map((x) => x.slice(0, 1))
      .join('')
      .slice(0, 2);
  },
);
