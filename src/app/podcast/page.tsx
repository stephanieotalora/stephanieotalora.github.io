import type { Metadata } from "next";
import { ActionLink } from "@/components/action-link";
import { BrandIcon } from "@/components/brand-icon";
import { Page } from "@/components/page";
import { podcast, profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Podcast | ${profile.name}`,
  description: `${podcast.name}, el podcast de ${profile.name}.`,
};

export default function PodcastPage() {
  return (
    <Page
      title={`🎙️ ${podcast.name}`}
      lead={<p>{podcast.description}</p>}
    >
      <div className="mt-10 flex flex-wrap gap-3">
        <ActionLink
          href={podcast.youtube}
          pendingLabel="Canal de YouTube disponible pronto"
        >
          <BrandIcon name="youtube" />
          YouTube
        </ActionLink>
        <ActionLink
          href={podcast.spotify}
          variant="outline"
          pendingLabel="Perfil de Spotify disponible pronto"
        >
          <BrandIcon name="spotify" />
          Spotify
        </ActionLink>
      </div>
    </Page>
  );
}
