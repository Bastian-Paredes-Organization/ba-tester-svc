import { initCampaigns } from './processes/initCampaigns';
import { setTrackEvents } from './processes/setTrackEvents';

const script = async () => {
  setTrackEvents();
  initCampaigns();
};

script();
