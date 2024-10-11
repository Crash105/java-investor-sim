# Title: (3) Deploy to Heroku or GCE

### Description:
Deploy your Spring Boot application to either **Heroku** or **Google Compute Engine (GCE)**. This will make your app publicly accessible on the web via a URL (Heroku) or an IP address (GCE).

- **Heroku** requires a paid plan for continuous app hosting (we recommend the $5/month Eco plan).
- **Google Compute Engine (GCE)** offers a **free tier** option, which is a good alternative if you want to host without immediate costs.

### Tasks:

#### Option 1: Deploy to Heroku (Paid Option)
1. **Create a Heroku account**: 
   - Visit [Heroku](https://www.heroku.com/), sign up, and verify your email.

2. **Create a new app**:
   - In your Heroku dashboard, click on "New" and then "Create new app".
   - Give your app a name (it must be unique) and choose a region (default is fine).

3. **Choose a Paid Plan**:
   - Heroku’s **free tier** has been deprecated for continuous hosting.
   - We recommend choosing the **Eco plan ($5/month)** for hobby apps. Follow the [Eco Plan Setup Guide](https://devcenter.heroku.com/articles/eco-dyno) for more details.
   - After setting up the Eco plan, your app will remain active and available.

4. **Connect to your GitHub repository**:
   - In the app’s dashboard, go to the "Deploy" tab.
   - Under "Deployment method", select **GitHub** and connect your account.
   - Search for your Spring Boot project repository and click **Connect**.

5. **Enable automatic deployments**:
   - Scroll down to the "Automatic deploys" section and click **Enable Automatic Deploys**.
   - This means Heroku will automatically deploy your app whenever you push changes to the GitHub repository.

6. **Verify the build and deployment**:
   - After deploying, go to the "Activity" tab to see the build status.
   - If successful, you’ll be able to visit your app at `https://<your-app-name>.herokuapp.com/hello`.

7. **(Optional) Add database support**:
   - If your project requires a database in future steps, add **JawsDB** from the "Resources" tab. This provides a simple MySQL database.

#### Option 2: Deploy to Google Compute Engine (GCE) (Free Tier Option)

1. **Create a Google Cloud Platform (GCP) account**:
   - Sign up for a [Google Cloud Platform](https://cloud.google.com/) account. GCE offers a **free tier** with limited usage, which includes a small VM instance. 
   - Visit the [GCP Free Tier Details](https://cloud.google.com/free/docs/gcp-free-tier) for more information on the available resources.

2. **Create a Virtual Machine (VM) instance**:
   - In the GCP dashboard, navigate to **Compute Engine** > **VM instances**.
   - Click **Create Instance**, name your VM, and choose a region.
   - For the **free tier**, select the **e2-micro** instance type, which qualifies for free usage each month (within limits).

3. **SSH into the VM**:
   - Once the VM is created, click "SSH" to open a terminal session.
   - Run the following commands to install Java and Maven:
     ```bash
     sudo apt update
     sudo apt install openjdk-17-jdk
     sudo apt install maven
     ```

4. **Clone your Spring Boot project**:
   - Run `git clone <your-repo-url>` to pull your GitHub repository to the VM.

5. **Build and run the app**:
   - Navigate to your project folder and run:
     ```bash
     ./mvnw spring-boot:run
     ```
   - This will start your Spring Boot app on the default port 8080.

6. **Configure the firewall**:
   - Go to **VPC Network** > **Firewall** and create a new rule to allow traffic on port 8080 (HTTP traffic).

7. **Access your app**:
   - Visit `http://<your-vm-ip>:8080/hello` in your browser to access the deployed app.

### Acceptance Criteria:
- The application is deployed and publicly accessible via a **Heroku URL** or **GCE public IP address**.
- The `/hello` route returns "Hello, World!" when accessed.
- Automatic deployment works for Heroku, and the GCE VM runs the application continuously.

### References:
- [Deploying Spring Boot to Heroku](https://devcenter.heroku.com/articles/deploying-spring-boot-apps-to-heroku)
- [Google GCE Deployment Guide](https://cloud.google.com/compute/docs/quickstart-linux)
- [Heroku Eco Plan Setup Guide](https://devcenter.heroku.com/articles/eco-dyno)
- [Google Cloud Free Tier Details](https://cloud.google.com/free/docs/gcp-free-tier)
