import React from "react";
import { shallow, mount } from "enzyme";
import EventList from "../EventList";
import Event from "../Event";
import { mockData } from "../mock-data";
import { getEvents } from "../api";

//Shallow rendering
describe("<EventList /> component", () => {
    test("render correct number of events", () => {
        const EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });
});

//Full rendering
describe("<EventList /> integration", () => {
    test("render correct number of events", async () => {
        const allEvents = await getEvents();
        const EventListWrapper = mount(<EventList events={allEvents} />);
        expect(EventListWrapper.find(Event)).toHaveLength(allEvents.length);
    });
});