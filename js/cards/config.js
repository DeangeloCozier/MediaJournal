function getCardsPerRow(containerId) {
    const container = document.getElementById(containerId);

    const styles = getComputedStyle(document.documentElement);

    const cardWidth = parseFloat(styles.getPropertyValue("--cardWidth"));
    const gap = parseFloat(styles.getPropertyValue("--cardGap"));

    return Math.floor(container.clientWidth / (cardWidth + gap));
}