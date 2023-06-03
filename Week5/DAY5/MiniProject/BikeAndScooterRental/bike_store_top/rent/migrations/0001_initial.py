# Generated by Django 4.2.1 on 2023-06-02 14:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address1', models.CharField(max_length=300)),
                ('address2', models.CharField(max_length=300)),
                ('city', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=100)),
                ('postal_code', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phone_number', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=300)),
                ('city', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='VehicleSize',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='VehicleType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('real_cost', models.IntegerField()),
                ('vehicle_size', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rent.vehiclesize')),
                ('vehicle_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rent.vehicletype')),
            ],
        ),
        migrations.CreateModel(
            name='RentalStation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('capacity', models.IntegerField()),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='address', to='rent.address')),
            ],
        ),
        migrations.CreateModel(
            name='RentalRate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('daily_rate', models.DecimalField(decimal_places=2, max_digits=5)),
                ('vehicle_size', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vehicle_size', to='rent.vehiclesize')),
                ('vehicle_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vehicle_type', to='rent.vehicletype')),
            ],
        ),
        migrations.CreateModel(
            name='Rental',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rental_date', models.DateField()),
                ('return_date', models.DateField(blank=True, null=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer', to='rent.customer')),
                ('vehicle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vehicle', to='rent.vehicle')),
            ],
        ),
    ]
