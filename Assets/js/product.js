function buyNow(name, price) {
      const url = `checkout.html?name=${encodeURIComponent(name)}&price=${price}`;
      window.location.href = url;
    }