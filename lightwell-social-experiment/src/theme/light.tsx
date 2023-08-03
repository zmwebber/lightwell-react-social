import { createTheme } from "@mui/material";

export const light = createTheme({
		palette: {
			mode: 'light',
		},
		components: {
				MuiCardContent: {
					styleOverrides: {
						root: {
							userSelect: "none",
							cursor: "pointer",
							touchAction: "manipulation",
							display: "block",
							background: "transparent",
							border: 0
						}
					}
				}
			}
		// components: {
		// 	MuiGrid: {
		// 		styleOverrides: {
		// 			root: {
		// 				backgroundColor: "aliceBlue"
		// 			}
		// 		}
		// 	},

	// 	overrides: {
  //   MuiPaper: {
  //     root: {
  //       padding: '10px',
  //       marginBottom: '10px'
  //     },
  //   },
  // }

			
		// 	// MuiPaper: {
		// 	// 	styleOverrides: {
		// 	// 		root: {
		// 	// 			elevation:""
		// 	// 		}
		// 	// 	}
		// 	// }
		// }		
	});