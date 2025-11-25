import type { IWidgetSettings } from "@aithinks/chatbot-react-widget";

export class WidgetService {
  private static readonly API_URL = import.meta.env.VITE_WIDGET_API_URL;
  static async fetchWidgetSettings(
    appId: string
  ): Promise<IWidgetSettings | null> {
    try {
      const url = `${WidgetService.API_URL}/settings/${appId}`;

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
