import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useStore } from 'react-redux';
import { useAppSelector } from '../../app/hooks/hooks';
import { getProfileFeed } from '../../api/TweetApi';
import IndividualTweetDisplay from "../FeedComponent/IndividualTweetDisplay/IndividualTweetDisplay";
import TabsComponentStyle from "./tabsComponentStyle.module.scss";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabsComponent() {
    const [value, setValue] = React.useState(0);
    const store = useStore();
    const feed = useAppSelector((state) => state.myTweets);
    const user = useAppSelector((state) => state.user.profile);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const [isInitialized, setInitialized] = React.useState(false);
    React.useEffect(() => {
        handleInit();
    }, [isInitialized]);
    function handleInit() {
        const currentState: any = store.getState();
        if (currentState.myTweets.myTweets.length > 0) {
            setInitialized(true);
        }
    }
    return (
        <Box sx={{ width: '100%' }} className={TabsComponentStyle.tabBox}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Tweets" {...a11yProps(0)} />
                    <Tab label="Tweets & Replies" {...a11yProps(1)} />
                    <Tab label="Media" {...a11yProps(2)} />
                    <Tab label="Likes" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}> {/* Create generic component to render instead of the TabPanels */}
                <>
                    {!feed.loading &&
                        feed.myTweets &&
                        feed.myTweets.map((tweet, index) => (
                            <div className={"tweet " + index} key={index}>
                                <IndividualTweetDisplay {...tweet} />
                            </div>
                        ))}
                </>

            </TabPanel>
            {/* <Hidden xsDown> */}

            <TabPanel value={value} index={1}>
                Tweets & Replies
            </TabPanel>
            <TabPanel value={value} index={2}>
                Media
            </TabPanel>
            <TabPanel value={value} index={3}>
                Likes
            </TabPanel>
            {/* </Hidden> */}
        </Box>
    );
}