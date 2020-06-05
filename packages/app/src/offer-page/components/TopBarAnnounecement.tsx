import { AppBar, Toolbar } from "@material-ui/core";
import { useContext } from "react";
import { PageContext } from "../PageContext";

const TopBarAnnouncement = () => {
    const { topBarAnnouncement } = useContext(PageContext)

    return (
        <AppBar>
            <Toolbar>
                {topBarAnnouncement}
            </Toolbar>
        </AppBar>
    )
}

export { TopBarAnnouncement }