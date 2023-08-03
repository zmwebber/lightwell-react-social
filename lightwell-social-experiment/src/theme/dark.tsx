import { createTheme } from "@mui/material";
import { app_background, base, paper_background_color } from "./themeColors";

export const dark = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: base,
				contrastText: base
			},
			secondary: {
				main: base,
			},
			background: {
				// paper: "#000000",
				default: app_background,
			},
		
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
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundColor: paper_background_color,
					}
				}
			},
			MuiTypography: {
				styleOverrides: {
					root: {
						color: base
					}
				}
			},
			
		},
		// typography: {
		// 	color: "white"
		// }


		
		// overrides: {
		// 	MuiPaper: {
		// 		root: {
		// 			padding: '10px',
		// 			marginBottom: '10px'
		// 		},
		// 	},
		// },
		// components: {
		// 	MuiPaper: {
		// 		styleOverrides: {
		// 			root: {
		// 				backgroundColor: "red"
		// 			}
		// 		}
		// 	}}
		// 	MuiPaper: {
		// 		styleOverrides: {
		// 			elevation: 1
					
		// 		}
		// 	}
		// }		
	});
