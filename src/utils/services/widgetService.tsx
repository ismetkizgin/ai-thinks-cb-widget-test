import type { IWidgetSettings } from "@aithinks/chatbot-react-widget";

export class WidgetService {
  static async fetchWidgetSettings(
    apiUrl: string,
    appId: string
  ): Promise<IWidgetSettings | null> {
    try {
      const url = `${apiUrl}/settings/${appId}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return null;
      }

      return await response.json();
    } catch {
      return null;
    }
  }
}
