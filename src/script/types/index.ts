import type { TypeAudienceScript, TypeCampaignScript, TypeExecutionGroupScript, TypeTrackEventScript } from '@ba-tester/types/script';

type TypeBaTester = {
  campaignsData: TypeCampaignScript[];
  executionGroupsData: TypeExecutionGroupScript[];
  trackEventsData: TypeTrackEventScript[];
  audiencesData: TypeAudienceScript[];
  serviceBaseUrl: string;
};

export type { TypeBaTester };
