import { Navigation } from 'react-native-navigation';
import { isTablet } from '../utils/device';

export function setLoginAsRoot() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'stack',
        children: [
          {
            component: {
              id: 'LoginScreen',
              name: 'LoginScreen',
            },
          },
        ],
      },
    },
  });
}

export function setMainAsRoot() {
  if (isTablet) {
    Navigation.setRoot({
      root: {
        stack: {
          id: 'stack',
          children: [
            {
              component: {
                id: 'PadMainScreen',
                name: 'PadMainScreen',
              },
            },
          ],
        },
      },
    });
  } else {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'NotesScreen',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Notes',
                  },
                  topBar: {
                    title: {
                      text: 'WizNote Lite',
                    },
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'StarredNotesScreen',
                    },
                  },
                ],
                options: {
                  topBar: {
                    title: {
                      text: 'Starred',
                    },
                  },
                  bottomTab: {
                    text: 'Starred',
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'SearchNotesScreen',
                    },
                  },
                ],
                options: {
                  topBar: {
                    title: {
                      text: 'Default Title',
                    },
                  },
                  bottomTab: {
                    text: 'Search',
                  },
                },
              },
            },
          ],
        },
      },
    });
  }
}